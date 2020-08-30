import { Command } from '@colyseus/command';
import { MapState } from '../states/MapState';
import { Client } from 'colyseus';

export default class ActionCommand extends Command<MapState, {client: Client, data: any}> {
    execute({ client, data } = this.payload) {
        console.log(`${client.id} msg ${data}`);   
    }
}