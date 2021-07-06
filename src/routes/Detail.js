import React from "react";
import { connect} from "react-redux";

function Detail(){
    return <h1>Detail</h1>
}

function mapStateToProps(state, ownProps){
    return {toDos: state}
}

export default connect(mapStateToProps) (Detail);