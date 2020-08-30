import { Room, Client } from "colyseus";
import { MapState } from "../states/MapState";
import { Dispatcher } from '@colyseus/command'


export class MapRoom extends Room<MapState> {

  dispatcher = new Dispatcher(this)

  onCreate(options: any) {
    
    this.setSimulationInterval((deltaTime) =>
      this.dispatcher.dispatch(new ServerTickCommand(), { deltaTime, state: this.state }))
    this.onMessage('action', (client, data) => {
      this.dispatcher.dispatch(new ActionCommand(), { client, data, state: this.state })
    })
  }

  onJoin(client: Client, options: any) {
    this.dispatcher.dispatch(new JoinCommand(), {client, options, state: this.state})
  }

  onLeave(client: Client, consented: boolean) {
    this.dispatcher.dispatch(new LeaveCommand(), {client, consented, state: this.state})
  }

  onDispose() {
  }

}
