import React from 'react';
import PropTypes from 'prop-types';
import CardsFormDesign from './Cards_form-design';
import CardsFormFill from './Cards_form-fill';
import CardsFormShare from './Cards_form-share';
import CardsFormTwitter from './Cards_form-twitter';

class CardsForm extends React.Component {
  render() {
    return (
      <section className="cards__section-2">
        <div className="wrapper">
          <form id="form" action="" method="POST">
            <CardsFormDesign formDesignTitle={this.props.formDesignTitle} />
            <CardsFormFill formFillTitle={this.props.formFillTitle} 
                           formLabelName={this.props.formLabelName}
                           formLabelJob={this.props.formLabelJob}
                           formLabelPhoto={this.props.formLabelPhoto}
                           fillImageBtn={this.props.fillImageBtn}
                           formLabelEmail={this.props.formLabelEmail}
                           formLabelTelephone={this.props.formLabelTelephone}
                           formLabelLinkedin={this.props.formLabelLinkedin}
                           formLabelGithub={this.props.formLabelGithub}
            />
            <CardsFormShare formShareTitle={this.props.formShareTitle} 
                            createCardBtn={this.props.createCardBtn}
            />
          </form>
          <CardsFormTwitter />  
        </div>
      </section>
    )
  }
}

CardsForm.propTypes ={
  formDesignTitle: PropTypes.string,
  formFillTitle: PropTypes.string,
  fillImageBtn: PropTypes.string,
  formShareTitle: PropTypes.string,
  createCardBtn: PropTypes.string,
}

export default CardsForm;