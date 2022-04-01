import React from "react";
import {Helmet} from "react-helmet";
class Application extends React.Component {
  render () {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>節目公版</title>
                <meta name="viewport" content="width=device-width"/>
                <meta name="keywords" content="關鍵字" />
                <meta name="description" content="導言"/>
            </Helmet>         
        </div>
    );
  }
};
export default Application;