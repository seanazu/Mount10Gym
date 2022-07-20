import React from 'react';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import '../../../Styles/ContactInfo.css'

const ContactInfoBar = () => {
    return (
        <div> 
            <div className="background">
                <div className="container">
                  <div className="screen">
                    <div className="screen-body">
                      <div className="screen-body-item left">
                        <div className="app-title">
                          <span>צרו</span>
                          <span>קשר</span>
                          
                        </div>
                        <br/>
                        <br/>
                          שעות פתיחה מועדון הכושר:
                          <br/>
                          <br/>
                           ימים א'- ה' : 06:00-13:00, 15:00-22:00
                          <br/>
                          <br/>
                          יום שישי : 07:00-16:00
                          <br/><br/>
                          שבת : 08:00-18:00
                      </div>
                      <div className="screen-body-item">
                        <div className="app-form">
                          <div className="app-form-group">
                            <LocalPhoneOutlinedIcon style={{fontSize:'150px', color:'black'}} placeholder="NAME" value="Krisantus Wanandi"/>
                            <br/>
                            <a href='tel:052-8333614'>052-8333614</a>
                          </div>
                          <div className="app-form-group">
                            <EmailOutlinedIcon style={{fontSize:'150px', color:'black'}} placeholder="EMAIL"/>
                            <br/>
                            <a href='mailto:Gym@har-adar.muni.il'>Gym@har-adar.muni.il</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoBar;