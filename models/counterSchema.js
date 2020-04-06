const mongoose = require('mongoose')
const { Schema } = mongoose;


let counterSchema = new Schema({
    name: { type: String, index: true, unique: true },
    value: { type: Number, default: 0}
});

/**
 * 获取一个系统级唯一id
 * @param name      {String}  计数器的名字
 * @param checkMode {Boolean} 查看模式，只查询，不自增
 */
counterSchema.statics.systeUniqueID = async function(name, checkMode) {
    const Counter = this.model("counter");
    let [ record ] = await Counter.find({name});
    if(record) {
        if(!checkMode) {
            let newValue = record.value + 1;
            await Counter.findOne({ name }).updateOne({ value: newValue });
            return newValue;
        }else {
            return record.value
        }
    }else {
        let newCounter = new Counter({ name: name, value: 0 });
        await newCounter.save();
        return 0;
    }
}

module.exports = mongoose.model("counter", counterSchema);