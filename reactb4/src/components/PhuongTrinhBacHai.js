import React, { useState } from 'react';
import Swal from 'sweetalert2';

const PhuongTrinhBacHai = () => {
    const [a, setA] = useState(-4);
    const [b, setB] = useState(-4);
    const [c, setC] = useState(4);
    const [nghiem, setNghiem] = useState([]);

    const tinhNghiem = (e) => {
        e.preventDefault();
        const delta = b * b - 4 * a * c;
        if (delta < 0) {
            const realPart = (-b / (2 * a)).toFixed(2);
            const imaginaryPart = (Math.sqrt(-delta) / (2 * a)).toFixed(2);
            setNghiem([`${realPart} + ${imaginaryPart}i`, `${realPart} - ${imaginaryPart}i`]);
            Swal.fire(`Nghiệm số phức: ${realPart} ± ${imaginaryPart}i`);
        } else if (delta === 0) {
            setNghiem([-b / (2 * a)]);
            Swal.fire(`Nghiệm kép: ${-b / (2 * a)}`);
        } else {
            const nghiem1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
            const nghiem2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
            setNghiem([nghiem1, nghiem2]);
            Swal.fire(`Nghiệm 1: ${nghiem1}; Nghiệm 2: ${nghiem2}`);
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">a</span>
                        <input type="number" className="form-control" value={a} onChange={(e) => setA(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">b</span>
                        <input type="number" className="form-control" value={b} onChange={(e) => setB(e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">c</span>
                        <input type="number" className="form-control" value={c} onChange={(e) => setC(e.target.value)} />
                    </div>
                    <button className='btn btn-primary mx-2' onClick={tinhNghiem}>Tính nghiệm</button>
                    <div className="mt-3">
                        {nghiem.map((nghiem, index) => <p key={index}>Nghiệm {index + 1}: {nghiem}</p>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhuongTrinhBacHai;