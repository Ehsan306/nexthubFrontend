// @flow
import * as React from 'react';
import Face from '../../images/dp.png'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import '../../CSS/influencer.css'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
  }));
function InfluencerLinkPage() {
    const classes = useStyles();
  return (
    <div className="container mb-5">
        <div className="row" style={{
            backgroundColor : '#f0f3f5',
            width: '45%',
            borderRadius : '10px',
            marginLeft : '30%'
        }}>
            <div className="col-6 mt-2 mb-2">
                <Avatar alt="Remy Sharp" src={Face} className={classes.large} />
            </div>
            <div className="col-6 mt-2 mb-2">
                
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
                        <button className="my-button">
                            Offerings
                        </button>
                    </div>
                    
            </div>
        </div>
            <br/>
            <div className="linkedSocialApps">
                YouTube    
            </div>
            <br/>
            <div className="linkedSocialApps">
                Instagram    
            </div>
            <br/>
            <div className="linkedSocialApps">
                Art Instagram    
            </div>
            <br/>
            <div className="linkedSocialApps">
                Tik Tok    
            </div>
    </div>
  );
};
export default InfluencerLinkPage
