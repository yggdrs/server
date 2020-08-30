import { Room, Client } from "colyseus";
import { MapState } from "../states/MapState";
import { Dispatcher } from '@colyseus/command'
import ServerTickCommand from "../commands/ServerTickCommand";
import JoinCommand from "../commands/JoinCommand";


export class MapRoom extends Room<MapState> {

  dispatcher = new Dispatcher(this)

  onCreate(options: any) {
    this.setState(new MapState())
    this.setSimulationInterval((deltaTime) =>
      this.dispatcher.dispatch(new ServerTickCommand(), { deltaTime }))
    this.onMessage('action', (client, data) => {
      // this.dispatcher.dispatch(new ActionCommand(), { client, data })
    })
  }

  onJoin(client: Client, options: any) {
    this.dispatcher.dispatch(new JoinCommand(), { sessionId: client.sessionId })
  }

  onLeave(client: Client, consented: boolean) {
    // this.dispatcher.dispatch(new LeaveCommand(), { client, consented })
  }

  onDispose() {
    this.dispatcher.stop()
  }

}
