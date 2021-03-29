module.exports = {
    multipleMongooseToObject(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
    },
    mongooseToObject(mongooses) {
        return mongooses ? mongooses.toObject() : mongooses;
    }
}