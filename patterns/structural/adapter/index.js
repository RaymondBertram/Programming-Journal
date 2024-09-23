//  Adapter Pattern
class Meter {
    constructor(mLength) {
        this.mLength = mLength;
    }
    getLength() {
        return this.mLength;
    }

    convertToCM() {
        return new CMAdapter(this.mLength);
    }

    convertToDC() {
        return new DCAdapter(this.mLength);
    }

    convertToSquareMeter() {
        return new SquareMeterAdapter(this.mLength);
    }

}

class CMAdapter {
    constructor(cmLength) {
        this.cmLength = cmLength * 100;
    }
}

class DCAdapter {
    constructor(dcLength) {
        this.dcLength = dcLength * 0.1;
    }
}

class SquareMeterAdapter {
    constructor(squareMeterLength) {
        this.squareMeterLength = Math.pow(squareMeterLength, 2);
    }
}

const conversionCM = new Meter(200).convertToCM().cmLength;
const conversionDC = new Meter(1).convertToDC().dcLength;
const conversionSM = new Meter(2).convertToSquareMeter().squareMeterLength;

console.log(conversionCM);
console.log(conversionDC);
console.log(conversionSM);





