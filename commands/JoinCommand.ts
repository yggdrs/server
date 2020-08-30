import { Command } from '@colyseus/command';
import { MapState, Player } from '../states/MapState';

export default class JoinCommand extends Command<MapState, { sessionId: string }> {
    execute({ sessionId } = this.payload) {
        this.state.players[sessionId] = new Player()
    }
}