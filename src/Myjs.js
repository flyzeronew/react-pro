import React from "react";
import $ from 'jquery';
export default class Myjs  extends React.Component {
    componentDidMount(){
        console.log($(".test").text());
        $(".test").click(function(){
            $(this).css({fontSize:'22px'});
        });
      }    
    render(){return (<div></div>)}
}

