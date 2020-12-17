// @flow
import * as React from 'react';
import InfluenceOfferingCard from './influenceOfferingCaed'
import "../../CSS/influenceOffering.css"
import Face from '../../images/dp.png'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
    large: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  }));

function InfluencerOfferingPage() {
    const classes = useStyles();
  return (
    <div>
      <div className="container-fluid">
            <div className="webView">
            <div className="row">
                <div className="col-lg-4 col-xl-4 col-md-4 col-xs-12">
                    <div className="profileDisplay">
                        <Avatar alt="Remy Sharp" src={Face} className={classes.large} />
                        <br/>
                        <b className="ml-4" style={{
                                    color : '#495056',
                                    fontSize : '35.79px'
                                    }}>Janice Parker</b>
                        <br/>
                        <div style={{
                            textAlign : 'center'
                        }}>
                            <b style={{
                            color: '#df362d',
                            fontSize : '23.86px'
                            }}>@japarker</b>
                        </div>
                        <br/>
                        <div style={{
                            textAlign : 'center'
                        }}>
                            <button className="my-button btn-block">
                                Social Media Links
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-xl-8 col-md-8 col-xs-12">
                
                    <InfluenceOfferingCard />
                </div>
            </div>
            </div>
            <div className="mobView">
              <div className="container-fluid">
                <div className="row">
                      <div className="profileDisplay">
                        <div className="row">
                          <div className="col-3">
                            <Avatar alt="Remy Sharp" src={Face} className={classes.small} />
                          </div>
                          <div className="col-2"></div>
                          <div className="col-7">
                            <div style={{
                              textAlign : 'center'
                            }}>
                            <b className="ml-4" style={{
                                    color : '#495056',
                                    fontSize : '21px',
                                    letterSpacing : '2px'
                                    }}>Janice Parker</b>
                        <br/>
                        <div style={{
                            textAlign : 'center'
                        }}>
                            <b style={{
                            color: '#df362d',
                            fontSize : '14px'
                            }}>@japarker</b>
                        </div>
                        <br/>
                        <div style={{
                            textAlign : 'center'
                        }}>
                            <button className="my-button btn-block">
                                Social Media Links
                            </button>
                        </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
                <br/>
                <div className="row">
                  <InfluenceOfferingCard />
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default InfluencerOfferingPage