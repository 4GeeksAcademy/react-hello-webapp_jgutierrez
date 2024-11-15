const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contacts: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      getContacts: async () => {
        const resp = await fetch(
          process.env.BACKEND_URL + "jgutierrez/contacts"
        );
        if (resp.status === 404) {
          getActions().createUser();
          return;
        }
        const data = await resp.json();
        setStore({ contacts: data.contacts });
      },
      createUser: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "jgutierrez/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });
          if (resp.status === 201) {
            getActions().getContacts();
            return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      deleteContact: async (id) => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "jgutierrez/contacts/" + id,
            {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            }
          );

          if (resp.status === 204) {
            getActions().getContacts();
            return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      createContact: async (newContact) => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "jgutierrez/contacts",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newContact),
            }
          );
          if (resp.status === 201) {
            getActions().getContacts();
            return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      editContact: async (newContact) => {
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "jgutierrez/contacts/" + newContact.id,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newContact),
            }
          );
          if (resp.status === 200) {
            getActions().getContacts();
            return true;
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      },
    },
  };
};

export default getState;
