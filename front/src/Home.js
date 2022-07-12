import './App.css';
import React, { useState } from "react";
import Axios from 'axios';
function Home () {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    
    const register = () => {  
        Axios.post('https///localhost:3003/',{firstname:firstname, lastname:lastname})
        .then(()=>{console.log();
        });  };
    return (

        <div className="formulaire">
            <form>
                <fieldset>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="firstname">FirstName:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="firstname"

                                    name="firstname"
                                    value={firstname}
                                    required
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="lastname">LastName:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    value={lastname}
                                    required
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}
                                ></input>


                            </td>
                        </tr>

                    </table>
                </fieldset>
                <button onClick={register}>register</button>
            </form>
            </div>
            );
                  }

            export default Home;