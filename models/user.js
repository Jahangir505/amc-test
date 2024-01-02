import mongoose, {Schema} from "mongoose";
const adminUsersSchema = new Schema(
    {
        name: String,
        username: String,
        email: String,
        password: String,
    },
    {
        timestamps: true,
    }
);
const AdminUsers= mongoose.models.AdminUsers || mongoose.model("AdminUsers",adminUsersSchema)
export default AdminUsers;