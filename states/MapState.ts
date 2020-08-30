import {Schema, type} from '@colyseus/schema';

export class MapState extends Schema {
    @type('string')
    str: String
}