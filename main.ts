huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_TAG_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            xiamiBoard.setIndexColor(0, 0xff0000)
            xiamiBoard.setIndexColor(1, 0xff0000)
        } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            xiamiBoard.setIndexColor(0, 0x00ff00)
            xiamiBoard.setIndexColor(1, 0x00ff00)
        } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            xiamiBoard.setIndexColor(0, 0x0000ff)
            xiamiBoard.setIndexColor(1, 0x0000ff)
        } else if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            xiamiBoard.setIndexColor(0, 0x00ffff)
            xiamiBoard.setIndexColor(1, 0x00ffff)
        } else {
            xiamiBoard.setIndexColor(0, 0xffff00)
            xiamiBoard.setIndexColor(1, 0xffff00)
        }
    }
})
