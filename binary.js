const unit = 100;

function setup(){
    createCanvas(8*unit, 8*unit);
    background("white");
    translate(4*unit,4*unit);
    generateSeq([], 17);
}

function generateSeq(seq, level){
    if (level <= 0){
	console.log(evaluate(seq,2));
	return;
    }
    for (let d=0; d<2; d++){
	seq.push(d);
	generateSeq(seq, level-1);
	seq.pop();
    }
}

function evaluate(seq, base){
    let sum = math.complex(0,0);
    //-1+i
    const b = math.complex(-1, 1); 
    for (let k in seq){
        //mathライブラリで複素数のi乗
        sum = math.add(sum, math.multiply(seq[k],math.pow(b,k)));
    }
    if (seq[10] == 0 && seq[11] == 0){
        fill("red");
        stroke("red");
    }else if(seq[10] == 0 && seq[11] == 1){
        fill("gray");
        stroke("gray");
    }else if(seq[10] == 1 && seq[11] == 0){
        fill("green");
        stroke("green");
    }else if(seq[10] == 1 && seq[11] == 1){
        fill("black");
        stroke("black");
    }
    //.reはrealの略で実部、.imはimaginaryの略で虚部
    circle(2*sum.re, 2*sum.im, 1);
    return(sum);
}
