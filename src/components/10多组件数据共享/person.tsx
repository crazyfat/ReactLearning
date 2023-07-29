import React, {Component} from 'react';
import {addPerson} from "../../redux/actions/person";
import {connect} from "react-redux";
import {PersonObj} from "../../redux/interface";
import {nanoid} from "nanoid";
interface StateProps{
    personList: Array<PersonObj>
}
interface DispatchProps{
    add: (argo: PersonObj)=>void
}
class Person extends Component<StateProps & DispatchProps, any> {
    nameNode = React.createRef<HTMLInputElement>();
    ageNode = React.createRef<HTMLInputElement>();
    render() {
        return (
            <div>
                <input  ref={this.nameNode} type="text" placeholder="name: "/>
                <input  ref={this.ageNode} type="text" placeholder="age: "/>
                <button  onClick={()=>{
                    const person = {
                        id: nanoid(),
                        name: this.nameNode.current?.value||'',
                        age: this.ageNode.current?.value||''
                    }
                    this.props.add(person);
                }}>添加</button>
                <ul>
                    {
                        this.props.personList.map((item, index)=>{
                            return (
                                <li key={item.id}>name: {item.name}, age: {item.age}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default connect(
    (initialState: any) => ({ personList: initialState.personReducer }),
    (dispatch: any) => ({ add: (personObj: PersonObj)=>dispatch(addPerson(personObj)) })
)(Person)

