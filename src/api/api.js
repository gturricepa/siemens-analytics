export function GENERAL_RESULTS() {
  return {
    url: "./SIEMENS.xlsx",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function CPMM_GLOBAL_RESULTS() {
  return {
    url: "./CPMM-GLOBAL-DATA.json",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function CIPMM_GLOBAL_RESULTS() {
  return {
    url: "./CIPMM-GLOBAL-DATA.json",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function DASH_DATA() {
  return {
    url: "./DATA-BY-ZONE-AND-COUNTRY.json",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function CPMM_ZONE() {
  return {
    url: "./CPMM-ZONE.json",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function CIPMM_ZONE() {
  return {
    url: "./CIPMM-ZONE.json",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function CRASHES() {
  return {
    url: "./CRASHES.json",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function INCIDENTS() {
  return {
    url: "./INCIDENTS.json",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}

export function COUNTRY_BY_ID(id) {
  return {
    url: `./COUNTRY${id}.json`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  };
}
