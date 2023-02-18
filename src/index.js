
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <div>
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Car</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarBasic">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Models </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Toyota Supra Engine </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact US</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    
<div id="carouselExampleIndicators" className="carousel slide  "   data-bs-ride="carousel">
  <div className="carousel-indicators  ">
    
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner  ">
    <div className="carousel-item active ">
      <img src="https://images.hdqwalls.com/download/toyota-supra-black-4k-od-1920x1080.jpg" className="d-block w-100 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="http://www.hdwallpaper.nu/wp-content/uploads/2017/03/toyota_supra-20.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://lh5.googleusercontent.com/proxy/0QPgcKRSTawxe-87NNsuhVJFd7GkFkWWrRFnMf2E9k_EyBNHW777CLjUlkyupqp1Z5s_mEA8TjWT-NwaBi8et2FuEqcdL28q9LON71cDUkVLr-VKcP3cbnpIzmv5ZLkwQfuH6JovDQY-Tl3rdmP09Fi0WCdyjNgITjp1Y3log3Yas7IwN6NQ9p18kZ71BHZxlVe8UJRe6K9Y3ZrcIgflYh3YXysPdXMBcXuSGgM3IO_QK-9CgYY=w1200-h630-p-k-no-nu" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div class="container mt-2">
  <h1>About US</h1> <hr />
  <div class="row">
    <div class="col" >
    <img src="https://wallup.net/wp-content/uploads/2016/03/12/170600-Toyota_Supra_MK4-Toyota_Supra-Toyota-JDM.jpg" alt="" style={{width:600, borderRadius:10}} />
    </div>
    <div class="col">
    The Toyota Supra (Japanese: トヨタ・スープラ, Hepburn: Toyota Sūpura) is a sports car and grand tourer manufactured by the Toyota Motor Corporation beginning in 1978. The name "supra" is derived from the Latin prefix, meaning "above", "to surpass" or "go beyond"

The initial four generations of the Supra were produced from 1978 to 2002. The fifth generation has been produced since March 2019 and went on sale in May 2019. The styling of the original Supra was derived from the Toyota Celica, but it was both longer and wider. Starting in mid-1986, the A70 Supra became a separate model from the Celica. In turn, Toyota also stopped using the prefix Celica and named the car Supra. Owing to the similarity and past of the Celica's name, it is frequently mistaken for the Supra, and vice versa. The first, second and third generations of the Supra were assembled at the Tahara plant in Tahara, Aichi, while the fourth generation was assembled at the Motomachi plant in Toyota City. 
    </div>
    
  </div>
</div>

<div class="container mt-5">
  <h1>Models</h1><hr />
  <div class="row">
    <div class="col">
    <div class="card">
  <img src="https://s-media-cache-ak0.pinimg.com/736x/85/b1/bb/85b1bb5c6439e099618ebf6a9486f446.jpg" class="card-img-top" alt="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">JDM</h5>
    <p class="card-text">The Supra has a history of professional drag racing, mainly in Japan and the United States. The HKS team have used both the Mk III and Mk IV to showcase its products, known as the HKS Drag Supra. This Supra was driven by Charlie Goncalves Catanho. It was mainly built on a custom chassis with a carbon fiber body, the Mk III version housed a de-stroked 2.89-liter twin-turbo 7M-GTE, good for 600 kW (800 bhp) at over 9000 rpm, giving a best quarter mile time of 8.09 seconds.[1].</p>
   
  </div>
</div>
    </div>
    <div class="col">
    <div class="card">
  <img src="https://s-media-cache-ak0.pinimg.com/736x/85/b1/bb/85b1bb5c6439e099618ebf6a9486f446.jpg" class="card-img-top" alt="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Supra</h5>
    <p class="card-text">The Supra has a history of professional drag racing, mainly in Japan and the United States. The HKS team have used both the Mk III and Mk IV to showcase its products, known as the HKS Drag Supra. This Supra was driven by Charlie Goncalves Catanho. It was mainly built on a custom chassis with a carbon fiber body, the Mk III version housed a de-stroked 2.89-liter twin-turbo 7M-GTE, good for 600 kW (800 bhp) at over 9000 rpm, giving a best quarter mile time of 8.09 seconds.[1]</p>
    
  </div>
</div>
    </div>
    <div class="col">
    <img src="https://s-media-cache-ak0.pinimg.com/736x/85/b1/bb/85b1bb5c6439e099618ebf6a9486f446.jpg" class="card-img-top" alt="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Supra</h5>
    <p class="card-text">The Supra has a history of professional drag racing, mainly in Japan and the United States. The HKS team have used both the Mk III and Mk IV to showcase its products, known as the HKS Drag Supra. This Supra was driven by Charlie Goncalves Catanho. It was mainly built on a custom chassis with a carbon fiber body, the Mk III version housed a de-stroked 2.89-liter twin-turbo 7M-GTE, good for 600 kW (800 bhp) at over 9000 rpm, giving a best quarter mile time of 8.09 seconds.[1]</p>
    
  </div>
    </div>
    <div class="col">
    <img src="https://s-media-cache-ak0.pinimg.com/736x/85/b1/bb/85b1bb5c6439e099618ebf6a9486f446.jpg" class="card-img-top" alt="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Supra</h5>
    <p class="card-text">The Supra has a history of professional drag racing, mainly in Japan and the United States. The HKS team have used both the Mk III and Mk IV to showcase its products, known as the HKS Drag Supra. This Supra was driven by Charlie Goncalves Catanho. It was mainly built on a custom chassis with a carbon fiber body, the Mk III version housed a de-stroked 2.89-liter twin-turbo 7M-GTE, good for 600 kW (800 bhp) at over 9000 rpm, giving a best quarter mile time of 8.09 seconds.[1]</p>
    
  </div>
    </div>
  </div>
</div>

<div class="container mt-5">
  <h1>Toyota Supra Engine</h1> <hr />
  <div class="row">
    <div class="col" >
    <img src="https://tse2.mm.bing.net/th?id=OIP.nfaUE0IZ09wtvIBxayQjwAHaFj&pid=Api&P=0" alt="" style={{width:500, borderRadius:10}} />
    </div>
    <div class="col">
    The J29/DB Toyota Supra, also known as the Toyota GR Supra, is the fifth generation of the Supra, a sports car produced by Toyota since 2019. The GR Supra was sold under and developed by Toyota's Gazoo Racing (GR) brand, in collaboration with BMW, and replaces the A80 Supra, which stopped production in 2002. The GR Supra rides on a new jointly-developed sports car platform by Toyota and BMW, with a short wheelbase, wide track, and low center of gravity, that also underpins the G29 BMW Z4.[8][9] Initially, BMW considered using a pre-existing platform of their own to underpin the new Supra, to which chief engineer Tada-san declined.[10] Both cars are also manufactured at the Magna Steyr plant in Graz, Austria.[11]

The fifth-generation Supra uses BMW model code conventions, designated as a J29 series with DB model codes. However, Toyota used the "A90" and "A91" code for promotional and marketing materials for the fifth generation Supra to maintain continuity from previous Supra generations.[12][13][14]
    </div>
    
  </div>
</div>

<div class="container mt-5">
  <h1>Contact US</h1><hr />
  <div class="row">
    <div class="col">
    <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Password"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Messeage</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<input type="text" className='btn btn-dark'  value="sabmit"/>
      
    </div>
  </div>
</div>

<div className='container-fluid mt-5 bg-dark text-success'>
<footer class="container">
    <p class="float-end"><a href="#">Back to top</a></p>
    <p>© 2017–2021 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
  </footer>

  
</div>









  </div>

 
);


reportWebVitals();
