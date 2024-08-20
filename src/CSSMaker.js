export default class CSSMaker {
    constructor(cssObj) {
      this.cssObj = cssObj;
    //   this.virtualizationFactor = virtualizationFactor;
    }
    convertToVirtual = () => ({
      position : 'absolute',
      backgroundColor: this.cssObj.color,
      // backgroundPosition: `${-this.cssObj.left}px ${-this.cssObj.top}px`,
      // backgroundSize: `${width} ${height}`,
      backgroundRepeat:'no-repeat',
      zIndex: '1',
      overflow:'hidden',
      top: this.cssObj.top + 'px' ,
      left: this.cssObj.left +'px',
      height: this.cssObj.height ,
      width: this.cssObj.width ,
      // background: `url("https://picsum.photos/900/180") 100px , 100px`,
      // backgroundRepeat:'no-repeat'
    });
  }