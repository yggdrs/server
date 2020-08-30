import { Command } from '@colyseus/command';
import { MapState } from '../states/MapState';

export default class ServerTickCommand extends Command<MapState, { deltaTime: number }> {
    execute({ deltaTime }: { deltaTime: number }) {
        console.log(`${this.state.players.keys()} Dt ${deltaTime}`)
    }
}