
import {
    StyleSheet,
    Dimensions
} from 'react-native';
let ScreenHeight = Dimensions.get('screen').height;
let ScreenWidth = Dimensions.get('screen').width;
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
    header: {
        position: 'relative',
        // backgroundColor:'#000'
    },
    blueColor: {
        color: '#2D2D62'
    },
    infoIxonHeader: {
        position: 'absolute',
        right: moderateScale(15, 0.1),
        top: moderateScale(15, 0.1),
        // backgroundColor:'#00205b'
    },
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    content: {
        width: '100%',
        marginTop: moderateScale(50, 0.1),
        alignItems: 'center'
    },
    cirlce: {
        position: 'relative',
        width: '100%',
        alignItems: 'center'
    },
    total: {
        fontSize: moderateScale(22, 0.1)
    },
    aed: {
        fontSize: moderateScale(34, 0.1)
    },
    ttextCircle: {
        alignItems: 'center', position: 'absolute',
        top: moderateScale(65, 0.1)
    },
    pGain: {
        width: '100%',
        alignItems: 'center',
        marginTop: moderateScale(30, 0.1),
    },
    Pain: {
        fontSize: moderateScale(18, 0.1)
    },
    Pperceent: {
        fontSize: moderateScale(24, 0.1),
        fontWeight: '600',
        marginTop: moderateScale(5, 0.1),
        marginBottom: moderateScale(20, 0.1)
    },
    transCon: {
        paddingHorizontal: moderateScale(10), paddingVertical: moderateScale(40)
    },
    transCard: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius:moderateScale(10),
        flexDirection:'row',
        paddingVertical:moderateScale(10),
        paddingRight:moderateScale(10),
        marginBottom:moderateScale(15)
    },
    TransPor:{
        flexDirection:'column'
    },
    Transicon:{
        width:'15%',
        alignItems:'center',
        justifyContent:'center'
    },
    transUpper:{
        flexDirection:'row',
        alignItems:'center',justifyContent:'space-between',
    },
    TransPor:{
        width:'85%',
        // backgroundColor:'#00205b'
    },  
    transP:{
        fontSize:moderateScale(18,0.1),fontWeight:'600'
    },
    transBottom:{
        flexDirection:'row',
        alignItems:'center',justifyContent:'space-between',
        marginTop:moderateScale(10)
    },
    Transdate:{
        fontSize:moderateScale(14)
    },
    transProc:{
        color:'#BC982A'
    },
    portRoundcirlce:{
        width:moderateScale(250,0.1),
        position:'relative',
        marginTop:moderateScale(40,0.1)
    },
    portRoundttextCircle:{
        position:'absolute',
        top:moderateScale(55,0.1),
        left:moderateScale(70,0.1),
        alignItems:'center'
    },
    porttotal:{
        fontSize:moderateScale(17,0.1)
    },
    portaed:{
        fontSize:moderateScale(24,0.1),
        fontWeight:'600'
    },
    portCard:{
        alignItems:'center',
        borderWidth:1,
        borderColor:'#BC982A',
        width:moderateScale(300,0.1),
        borderRadius:moderateScale(30),
        paddingVertical:moderateScale(35,0.1)
    },
    portName:{
        fontSize:moderateScale(25,0.1)
    },
    carIco:{
        position:'absolute',
        bottom:moderateScale(10,0.1),
        left:moderateScale(110,0.1),
    },
    portAiunv:{
        width:'100%',
        marginTop:moderateScale(20)
    },
    amountInvested:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:moderateScale(25,0.1),
        marginTop:moderateScale(10),
        overflow:'hidden'
    },
    amountIvnc:{
        fontSize:moderateScale(16,0.1)
    },
    amountAed:{
        fontSize:moderateScale(16,0.1),
        fontWeight:'600',
        maxWidth:moderateScale(100)
    },
    portFoluioTxt:{
        position:'relative',
        width:'100%',
        alignItems:'center'
    },
    editIconPort:{
        position:'absolute',
        right:moderateScale(20,0.1),
        bottom:moderateScale(2,0.1)
    },
    editIconPorto:{
        position:'absolute',
        right:moderateScale(20,0.1),
        bottom:moderateScale(15,0.1)
    },
    portCon:{
        // width: moderateScale(ScreenHeight- 60),
        // backgroundColor:'#000'
        marginTop:'20%'
    },
    capital:{
        textTransform:'capitalize'
    },
    InpPor:{
        fontSize:moderateScale(25,0.1),
        color:'#2D2D62',
        textAlign:'center'
    },
    makingCardPort:{
        borderWidth:1,
        borderColor:'#2D2D62',
        height:moderateScale(420,0.1),
        borderRadius:moderateScale(30),
        paddingTop:moderateScale(40,0.1),
        paddingBottom:moderateScale(80 ,0.1),
        paddingLeft:moderateScale(10)
    },
    portName:{
        fontSize: 19, 
        color: '#3A215D', 
        fontFamily: 'segoeui', 
        paddingLeft:moderateScale(15),
        marginBottom:moderateScale(15)
    },
    PortFolioMain:{
        marginTop:moderateScale(40)
    },
    portImg:{
        position: 'absolute',
        bottom:moderateScale(0),
        width:'100%',
        height:moderateScale(50)
    },
    buttonB:{
        padding: 5,
        borderRadius: 50,
        width: moderateScale(120,0.1),
        marginTop: 65,
        alignSelf: 'center',
        backgroundColor: '#2D2D62',
        flexDirection: 'row',
        height:moderateScale(40,0.1),
        alignItems:'center',
        justifyContent:'center'
    },
    buttonT:{
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'OpenSans-Bold',
        color: 'white',
    }
});