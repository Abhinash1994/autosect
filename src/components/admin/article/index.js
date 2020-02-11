import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core/';
import CKEditor from "react-ckeditor-component";

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: 'content',
        }
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }

    onChange(evt) {
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        this.setState({
            content: newContent
        })
    }

    onBlur(evt) {
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt) {
        console.log("afterPaste event called with event info: ", evt);
    }
    render() {
        return (

            <div>
                <Paper style={{background:'#eaeaea'}}>
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
                                <CKEditor
                                    activeClass="p10"
                                    content={this.state.content}
                                    events={{
                                        "blur": this.onBlur,
                                        "afterPaste": this.afterPaste,
                                        "change": this.onChange
                                    }}
                                />
                            </div>
                        </Grid>
                    </Grid>
                    {/* close */}

                    {/* 4nd row */}
                    <Paper>
                        <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Code Display_1 : </h1>
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <div className="form-group ">
                                    <input type="text" className="form-control" name="name" placeholder="index.js" />
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className="form-group ">
                                    <textarea className="form-control" rows="4" placeholder="code write"></textarea>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className="form-group ">
                                    <textarea className="form-control" rows="4" placeholder="paragraph"></textarea>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* close */}

                    {/* 6nd row */}
                    <Paper>
                        <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Code Display_2 : </h1>
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <div className="form-group ">
                                    <input type="text" className="form-control" name="name" placeholder="title" />
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className="form-group ">
                                    <textarea className="form-control" rows="4" placeholder="code write"></textarea>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className="form-group ">
                                    <textarea className="form-control" rows="4" placeholder="paragraph"></textarea>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* close */}

                    {/* 6nd row */}
                    <Paper>
                        <h1 style={{ paddingTop: '10px', fontSize: '20px' }}>Code Display_3 : </h1>
                        <Grid container spacing={2}>
                            <Grid item md={4}>
                                <div className="form-group ">
                                    <input type="text" className="form-control" name="name" placeholder="title" />
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className="form-group ">
                                    <textarea className="form-control" rows="4" placeholder="code write"></textarea>
                                </div>
                            </Grid>
                            <Grid item md={4}>
                                <div className="form-group ">
                                    <textarea className="form-control" rows="4" placeholder="paragraph"></textarea>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* close */}

                </Paper>
            </div>
        )
    }
}
