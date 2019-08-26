import React, {Component} from 'react';
import './List.css';
class List extends Component{

    constructor(props) {
        super(props);
        this.state= {
            data:
            [
                {
                    "Name":"Gandalf",
                    "Race":"Maia",
                    "Age":2019,
                    "Weapon":"Staff",
                    "kill": "kill",
                    "Use": "Use Ring",
                },
                {
                    "Name":"Aragorn",
                    "Race":"Human",
                    "Age":120,
                    "Weapon":"Sword",
                    "kill": "kill",
                    "Use": "Use Ring",
                },
                {
                    "Name":"Legolas",
                    "Race":"Elf",
                    "Age":200,
                    "Weapon":"Bow",
                    "kill": "kill",
                    "Use": "Use Ring",
                }
            ]
        }
    }
    render(){
        const {data} = this.state;
        return(
            <div className="list">
                <table className="characters-table"> 
                    <tbody>
                    <tr className="character-row">
                        <th>Name</th>
                        <th>Race</th>
                        <th>Age</th>
                        <th>Weapon</th>
                        <th></th>
                    </tr>
                    {data.map((element,index) => (
                        <tr key={index} className="character-row">
                            <td>{element.Name}</td>
                            <td>{element.Race}</td>
                            <td>{element.Age}</td>
                            <td>{element.Weapon}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;