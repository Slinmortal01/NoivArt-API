import icon from '../assets/icon.svg'
import Checkbox from '@mui/material/Checkbox';

function List() {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Primeiro Nome</th>
                        <th scope="col">Último Nome</th>
                        <th scope="col">Check</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td><Checkbox {...label} color="success" /></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><Checkbox {...label} color="success" /></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><Checkbox {...label} color="success" /></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td><Checkbox {...label} color="success" /></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default List