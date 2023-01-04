# !/bin/bash
set -e
set -o pipefail

session="kiz2"

kmux() {
  tmux -L kiz "$@"
}

kmux -f scripts/configs/tmux.conf new-session -d -s $session ||
  echo "try to kill and create session again..." &&
  kmux kill-session -t $session &&
  kmux -f scripts/configs/tmux.conf new-session -d -s $session

# req='docker-compose -f docker/docker-compose.req.yaml logs -f'
# telemetry='docker-compose -f docker/docker-compose.telemetry.yaml logs -f'

window=0
kmux rename-window -t $session:$window 'client'
kmux send-keys -t $session:$window "cd Microservice1 && npm run start:dev" C-m
kmux split-window -t $session:$window -h "cd Client && npm run start:dev"

kmux a -t $session