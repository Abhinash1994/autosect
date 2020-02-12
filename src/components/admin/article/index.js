import React, { Component } from 'react'
import { Grid, Paper, Button } from '@material-ui/core/';
import CKEditor from "react-ckeditor-component";

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'content',
            codedisplay: [{ filename: "", code: "", paragraph: "" }],
        }
    }
    addClick() {
        this.setState(prevState => ({
            codedisplay: [...prevState.codedisplay, { filename: "", code: "", paragraph: "" }]
        }))
    }

    createUI() {
        return this.state.codedisplay.map((el, i) => (
            <Grid container key={i} spacing={2}>
                <Grid item md={3}>
                    <div className="form-group ">
                        <input type="text" className="form-control" name="filename" placeholder="filename" value={el.filename || ''} onChange={this.handleChange.bind(this, i)} />
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className="form-group ">
                        <textarea className="form-control" placeholder="code" rows="4" name="code" value={el.code || ''} onChange={this.handleChange.bind(this, i)} ></textarea>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div className="form-group ">
                        <textarea className="form-control" rows="4" placeholder="paragraph" name="paragraph" value={el.paragraph || ''} onChange={this.handleChange.bind(this, i)}></textarea>
                    </div>
                </Grid>
                <Grid item md={1}>
                    <div className="form-group ">
                        <Button variant="contained" color="primary" onClick={this.removeClick.bind(this, i)}> remove </Button>
                    </div>
                </Grid>
            </Grid>
        ))
    }

    handleChange(i, e) {
        const { name, value } = e.target;
        let codedisplay = [...this.state.codedisplay];
        codedisplay[i] = { ...codedisplay[i], [name]: value };
        this.setState({ codedisplay });
    }

    removeClick(i) {
        let codedisplay = [...this.state.codedisplay];
        codedisplay.splice(i, 1);
        this.setState({ codedisplay });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(JSON.stringify(this.state.codedisplay))
    }


    render() {
        return (

            <div>
                <Paper style={{ background: '#eaeaea' }}>
                    <Grid container spacing={2}>
                        <Grid item md={2}>
                            <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Type : </h1>
                            <select className="form-control">
                                <option value="select">Select an topic</option>
                                <option value="Javascript">Javascript</option>
                                <option value="Reactjs">Reactjs</option>
                                <option value="Nodejs">Nodejs</option>
                                <option value="Tutotial">Tutotial</option>
                            </select>
                        </Grid>
                        <Grid item md={3}>
                            <div class="form-group">
                                <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Title : </h1>
                                <input type="text" class="form-control" placeholder="title" />
                            </div>
                        </Grid>
                        <Grid item md={2}>
                            <div class="form-group">
                                <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Date : </h1>
                                <input type="date" class="form-control" placeholder="title" />
                            </div>
                        </Grid>
                        <Grid item md={2}>
                            <div class="form-group">
                                <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Author : </h1>
                                <input type="text" class="form-control" placeholder="author name" />
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div class="form-group">
                                <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>video url : </h1>
                                <input type="text" class="form-control" placeholder="author name" />
                            </div>
                        </Grid>
                    </Grid>

                    {/* //2nd row */}

                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <div className="form-group titlewe">
                                <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Body : </h1>
                                <textarea className="form-control" rows="3" ></textarea>
                            </div>

                        </Grid>
                        <Grid item md={2}>
                            <div className="form-group titlewe">
                                <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Images : </h1>
                                <input type="file" className="form-control-file" name="blogImages"
                                />
                            </div>
                        </Grid>

                        <Grid item md={3}>
                            <div className="form-group titlewe">
                                <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>URL/Slug : </h1>
                                <input type="text" className="form-control" name="title" placeholder="slug" />
                            </div>
                        </Grid>

                        <Grid item md={3}>
                            <div className="form-group titlewe">
                                <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Tags : </h1>
                                <textarea className="form-control" rows="3" ></textarea>
                            </div>
                        </Grid>

                    </Grid>
                    {/* close */}


                    {/* 3nd row */}

                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <div className="form-group titlewe">
                                <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Detail with Image : </h1>
                                <CKEditor activeClass="p10" content={this.state.content} />
                            </div>
                        </Grid>
                    </Grid>
                    {/* close */}

                    {/* 4nd row */}
                    <Paper>
                        <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Code Display: </h1>
                        {this.createUI()}
                        <Button variant="contained" color="secondary" onClick={this.addClick.bind(this)}> Add More </Button>
                    </Paper>
                    {/* close */}

                    <Button variant="contained" color="secondary" onClick={(e)=>this.handleSubmit(e)}>
                        Submit
                    </Button>
                </Paper>
            </div>
        )
    }
}
