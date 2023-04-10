const dbBuying = {
    save(ListBuying2) {
        localStorage.setItem('ListBuying', JSON.stringify(ListBuying2));
    },
    get() {
        return JSON.parse(localStorage.getItem('ListBuying'));
    }
}
 const num = {
    showNum: function () {
        this.ListBuying = dbBuying.get();
        let consum = null
            for(consum = 0; consum <= this.ListBuying.length; consum++) {
                document.getElementById("consumerNum").innerHTML = consum ;
            }
        }
    }

    const dbAdd = {
        save(ListAdd2) {
            localStorage.setItem('ListAdd', JSON.stringify(ListAdd2));
        },
        get() {
            return JSON.parse(localStorage.getItem('ListAdd'));
        }
    }
     const productNum = {
        showNumm: function () {
            this.ListAdd = dbAdd.get();
            let prosum = null
                for(prosum = 0; prosum <= this.ListAdd.length; prosum++) {
                    document.getElementById("numProduct").innerHTML = prosum ;
                }
            }
        }
num.showNum();
productNum.showNumm();