import { IRecords } from '../../models/interfaces/Record.Model';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetRecord } from './recordAction';


export interface IRecordModel  {
    Records: IRecords[];
}

@State<IRecordModel>({
    name: 'RecordStore',
    defaults: {
        Records: []
    }
})
export class RecordState{
    
    @Action(GetRecord)
    add(ctx: StateContext<IRecordModel>, {payload}: GetRecord) {
        const state = ctx.getState();
        ctx.setState({
           ...state, 
           Records: payload
        })
    }

    @Selector()
    static GetRecordsTab(state: IRecordModel) {
        return state.Records as IRecords[];
    }
}