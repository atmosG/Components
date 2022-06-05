import './LoginForm.scss';

type LoginFormProps = {
  onChange : (e :React.ChangeEvent<HTMLInputElement>) => void;
}

function LoginForm({ onChange } :LoginFormProps) {
  return(
    <div className='wrapper'>
      <div className="login-inner">
        <h2>DIY Flower Garden</h2>
        <form>
          <input type='text' name="userId" placeholder="아이디" onChange={onChange} />
          <input type='password' name="password" placeholder="비밀번호" onChange={onChange} />
          <input type='checkbox' id='checkbox' />
          <label htmlFor='checkbox'>로그인 상태 유지</label>
          <input type='submit' value='로그인'/>
        </form>
        <button>카카오 로그인</button>
        <button>네이버 로그인</button>
        <div>
          <span>회원가입</span>
          <span>비밀번호 찾기</span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;