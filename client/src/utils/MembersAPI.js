import axios from "axios";

export default {
    // Gets all books
    getAllMembers: function() {
        return axios.get("/api/members/all");
    },
}
