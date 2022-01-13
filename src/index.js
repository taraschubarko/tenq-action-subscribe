import React from 'react'
import PropTypes from "prop-types";
import axios from 'axios';

class TenqActionSubscribe extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      provider,
      promo_id,
      label,
      className,
      host,
      token,
      onSubscribe
    } = this.props;
  }

  onSubscribe() {
    axios.post(`${this.props.host}/api/v0/auth/soc/${this.props.provider}/key`).then(response => {
      localStorage.setItem('socKey', response.data);
      this.getSoc();
    })
  }

  getSoc(){
    let _this = this;
    axios.post(`${this.props.host}/api/v0/auth/soc/${this.props.provider}`).then(response => {
      let newWindow = null;
       newWindow = window.open(response.data, "", "width=680,height=400");

      var poolingInterval = setInterval(function (){
        if (!newWindow || newWindow.closed || newWindow.closed === undefined) {
          clearInterval(poolingInterval)
          poolingInterval = null
          newWindow = null
        }
        //console.log(newWindow)
        if(newWindow === null){
          _this.getSocInfo();
        }
      }, 250);
    })
  }

  getSocInfo(){
    axios.post(`${this.props.host}/api/v0/auth/promo/subscribe/${localStorage.getItem('socKey')}`, {
      promo_id: this.props.promo_id
    }, {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    }).then(response => {
        this.props.onSubscribe(response);
    })
  }

  render() {
    return (
      <button className={this.props.className} onClick={() => this.onSubscribe()}>
        {
            this.props.children ?
            this.props.children :
            this.props.label
        }
      </button>
    );
  }
}

TenqActionSubscribe.propTypes = {
  provider: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  host: PropTypes.string,
  token: PropTypes.string,
  promo_id: PropTypes.numeric,
  onSubscribe: PropTypes.function
};

TenqActionSubscribe.defaultProps = {
  provider: 'vkontakte',
  label: 'Участвовать c VK',
};

export default TenqActionSubscribe;
