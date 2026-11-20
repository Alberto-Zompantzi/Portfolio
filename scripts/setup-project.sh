#!/usr/bin/env bash
set -euo pipefail

OWNER="${1:-Alberto-Zompantzi}"
REPO="${2:-Portfolio}"
PROJECT_TITLE="Portafolio Bilingüe - Backlog"
REPO_NAME="${OWNER}/${REPO}"

command -v gh >/dev/null 2>&1 || { echo "Error: gh CLI es requerido." >&2; exit 1; }
gh auth status >/dev/null

PROJECT_NUMBER="$(gh project list --owner "$OWNER" --format json --jq ".projects[] | select(.title == \"$PROJECT_TITLE\") | .number" | head -n 1)"
if [[ -z "$PROJECT_NUMBER" ]]; then
  PROJECT_NUMBER="$(gh project create --owner "$OWNER" --title "$PROJECT_TITLE" --format json --jq '.number')"
  echo "Proyecto creado: $PROJECT_TITLE (#$PROJECT_NUMBER)"
else
  echo "Proyecto existente: $PROJECT_TITLE (#$PROJECT_NUMBER)"
fi

if ! gh project list --owner "$OWNER" --format json --jq ".projects[] | select(.number == $PROJECT_NUMBER) | .title" >/dev/null; then
  echo "No se pudo confirmar el proyecto #$PROJECT_NUMBER" >&2
  exit 1
fi

if ! gh project field-list "$PROJECT_NUMBER" --owner "$OWNER" --format json --jq '.[].name' | grep -Fxq 'Área'; then
  gh project field-create "$PROJECT_NUMBER" --owner "$OWNER" --name 'Área' --data-type SINGLE_SELECT --single-select-options 'Frontend,Backend,Cloud/Infra,Producto/Diseño'
fi
if ! gh project field-list "$PROJECT_NUMBER" --owner "$OWNER" --format json --jq '.[].name' | grep -Fxq 'Prioridad'; then
  gh project field-create "$PROJECT_NUMBER" --owner "$OWNER" --name 'Prioridad' --data-type SINGLE_SELECT --single-select-options 'Alta,Media,Baja'
fi
if ! gh project field-list "$PROJECT_NUMBER" --owner "$OWNER" --format json --jq '.[].name' | grep -Fxq 'Estimación'; then
  gh project field-create "$PROJECT_NUMBER" --owner "$OWNER" --name 'Estimación' --data-type NUMBER
fi

if gh repo view "$REPO_NAME" --json projectsV2 --jq ".projectsV2[].title" | grep -Fxq "$PROJECT_TITLE"; then
  echo "Repositorio ya vinculado: $REPO_NAME"
else
  gh project link "$PROJECT_NUMBER" --owner "$OWNER" --repo "$REPO_NAME"
fi

# Etiquetas estables; --force actualiza color/descripcion si ya existen.
while IFS='|' read -r name color description; do
  gh label create "$name" --color "$color" --description "$description" --force --repo "$REPO_NAME"
done <<'LABELS'
front|1D76DB|Trabajo de frontend
back|0052CC|Trabajo de backend
cloud|5319E7|Cloud e infraestructura
docs|0075CA|Documentación y contenido
design|FBCA04|Diseño de producto
bug|D73A4A|Corrección de defecto
chore|EDEDED|Mantenimiento técnico
contract-breaking|B60205|Cambio incompatible de contrato
blocked|BFD4F2|Bloqueado por dependencia externa
priority:high|B60205|Prioridad alta
LABELS

echo
echo "Configuración manual pendiente en GitHub:"
echo "1. En el proyecto #$PROJECT_NUMBER, agrega el campo Sprint con tipo Iteration y define sus iteraciones."
echo "2. Crea las vistas Board, Tabla y Roadmap, configurando agrupación y campos visibles según el equipo."
echo "3. Configura workflows automáticos para mover elementos entre Backlog, In Review y Done."

