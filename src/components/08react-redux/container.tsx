import countUI from "./index";
import {connect} from "react-redux";
import {asyncIn,createIn} from "../../redux/count_action";

function mapStateToProps(state: any){
    return {
        sum: state
    }
}
function mapDispatchToProps(dispatch: Function){
    return {
        increment: (data: any)=>{
            dispatch(asyncIn(data))
        }
    }
}
//export default connect(mapStateToProps, mapDispatchToProps)(countUI);

export default connect(
    (state: any) => ({ sum: state}),
    dispatch => ({increment: (data: any)=>{dispatch(createIn(data))}})
)(countUI);
