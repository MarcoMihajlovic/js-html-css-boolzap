var app = new Vue ({
    el: '#root',
    
    data: {
        path: "img/avatar",
        format: ".jpg",
        counter: 0,
        newText: "",
        search:"",
        numero: 0,

        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },

        contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }],
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }],
                },
        ],
    },
    
    methods: {
        click: function(index) {
            this.counter = index
        },

        newMessage: function() {

            let thisContact = this.contacts[this.counter]; 

            var newMessage = {
                date:dayjs().format('DD MM YYYY hh:mm:ss'),
                text: this.newText,
                status: 'sent' 
            };

            var receivedMessage = {
                date:dayjs().format('DD MM YYYY hh:mm:ss'),
                text:'Ok',
                status:'received'
            };

            let response = setInterval(() => {
                document.getElementById("writing").classList.add("show");
            },0);

            setTimeout(() => {
                clearInterval(response);
                document.getElementById("writing").classList.remove("show");
                thisContact.messages.push(receivedMessage);
            }, 1000);

            thisContact.messages.push(newMessage);

            this.newText = '';
        },

        filter: function() {
            this.contacts.forEach((element) => {
                if(element.name.includes(this.search.charAt(0).toUpperCase() + this.search.slice(1)))  {
                    element.visible = true;
                } else {
                    element.visible = false;
                }
                
            })

        },

        dropdown_menu: function(index) {
            /*document.getElementsByTagName("dropdown-content")[index].classList.toggle("show");*/                
            document.getElementById("myDropdown" + index).classList.toggle("show");
        },

        delete_message: function(index) {
            console.log(index);
            this.contacts[this.counter].messages.splice(index, 1);
        }

    }
})

window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

Vue.config.devtools = true;