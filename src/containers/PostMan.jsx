import React, { Component } from 'react';
import SearchControls from '../components/app/controls/Search';
import Header from '../components/app/controls/Header';
import SideDisplay from '../components/app/controls/SideDisplay';
import BottomDisplay from '../components/app/controls/BottomDisplay';
import { SearchFunction } from '../services/SearchFunction';
import { setMethod, setUrl } from '../components/app/UtilFunctions.js';
import styles from './PostMan.css';


export default class PostMan extends Component {
  state = {
    loading: true,
    url: '',
    body: 'Hello. I am bored. PLEASE make a fetch!',
    method: '',
    putBody: ''
  };

  handleSubmit = async (e) => {
    const { url, method, putBody } = this.state;
    e.preventDefault();
    setMethod(method);
    setUrl(url);
    const apiResponse = await SearchFunction(url, method, putBody);
    this.setState({ body: apiResponse, method, loading: false });
  }

  handleUrlChange = ({ target }) => {
    this.setState({ url: target.value });
  };

  handleMethodChange = ({ target }) => {
    this.setState({ method: target.value });
  };

  handlePutChange = ({ target }) => {
    this.setState({ putBody: target.value });
  };

  async componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { url, method, body, putBody, loading } = this.state;

    if (loading) return <h1>Loading...</h1>;

    return (
      <>
        <div className={styles.body}>
          <Header />

          <div className={styles.main}>

            <div className={styles.left}>
              <SideDisplay />
            </div>

            <div className={styles.right}>
              <SearchControls
                url={url} method={method}
                putBody={putBody} onUrlChange={this.handleUrlChange}
                onMethodChange={this.handleMethodChange}
                onPutChange={this.handlePutChange}
                onSubmit={this.handleSubmit}
              />

              <BottomDisplay body={body} />
            </div>

          </div>

        </div>

      </>




    );
  }
}
