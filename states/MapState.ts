import { Schema, ArraySchema, type } from '@colyseus/schema';

export class Player extends Schema {
    @type('string')
    id: number

    @type('number')
    x: number

    @type('number')
    y: number
}

export class MapState extends Schema {
    @type([Player])
    players = new ArraySchema<Player>()
}
