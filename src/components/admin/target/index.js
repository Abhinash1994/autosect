import React, { Component } from 'react'
import {Paper, Table , TableBody ,TableCell , TableHead , TableRow} from '@material-ui/core/';
export default class Targets extends Component {
    render() {
        return (
            <div>
                <Paper>
                    <Table className="table" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Address</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">vulnerability</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">1 </TableCell>
                                    <TableCell align="right">descr</TableCell>
                                    <TableCell align="right">active</TableCell>
                                    <TableCell align="right">active</TableCell>
                                    <TableCell align="right">bug</TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}
