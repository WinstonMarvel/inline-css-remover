import { menu_click, removeInlineCSS, removeClass, removeIDs, removeAll } from '../functions.js';

var expect = chai.expect;
let testdata = `<div class="e213sadner" style="color:red;">
<ul>
<li class="sdfn,c"><strong>adadasdn<br>assd12:</strong><strong> </strong>sadfsadfasf.</li>
<li id="rempv"><strong>Lore Dvb:</strong> jdfbsadfjsd fnasd fjsd fa f, asdfasdfk dsflkasdf ksdf laskdf sladkf sda f.</li>
<li id="noksiz"><strong style="color:red;">Cdffrimin34al defadfenasdfse: </strong>sadfnv nsadkfjsdf nsdkfjsad .</li>
</ul>
</div>`;



describe('removeInlineCSS', function() {
    it('Length of test data should be lesser', function(){
        let output = removeInlineCSS(testdata);
        expect( output.length ).to.have.lessThan(testdata.length);
        console.log("Remove Inline CSS")
        console.log(output)
    })
})

describe('removeClass', function() {
    it('Length of test data should be lesser', function(){
        let output = removeClass(testdata);
        expect( output.length ).to.have.lessThan(testdata.length);
        console.log("Remove Class")
        console.log(output)
    })
})

describe('removeIDs', function() {
    it('Length of test data should be lesser', function(){
        let output = removeIDs(testdata);
        expect( output.length ).to.have.lessThan(testdata.length);
        console.log("Remove IDs")
        console.log(output)
    })
})

describe('removeAll', function() {
    it('Length of test data should be lesser', function(){
        let output = removeAll(testdata);
        expect( output.length ).to.have.lessThan(testdata.length);
        console.log("Remove All")
        console.log(output)
    })
})
