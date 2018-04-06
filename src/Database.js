  export function _storeData(data) {
    localStorage.removeItem("divData")
    return localStorage.setItem("divData", JSON.stringify(data));
  }

  export function _storeNotes(data) {
    localStorage.removeItem("divNotes")
    return localStorage.setItem("divNotes", JSON.stringify(data));
  }

  export function _pullData(userId) {
    return JSON.parse(localStorage.getItem('divData'));
  }

  export function _pullNotes() {
    return JSON.parse(localStorage.getItem('divNotes'));
  }
