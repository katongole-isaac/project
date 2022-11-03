import authFetch from "../../authFetch";

const updateComplaintStatus = async (
  UPDATE_COMPLAINT_STATUS_URL,
  _id,
  COMPLAINT_STATUS
) => {
  try {
    const resp = await authFetch.put(UPDATE_COMPLAINT_STATUS_URL, {
      id: _id,
      status: COMPLAINT_STATUS,
      viewed: true,
    });
    if (resp.status >= 200 && resp.status <= 299) {
      console.log(resp.data);
    }
  } catch (ex) {
    console.log(ex);
  }
};

export default updateComplaintStatus;
