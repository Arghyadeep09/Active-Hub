const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');

const secretKey='addyscrapper1234';

// Register User Function
const registerUser = async (name, email, password, mobileNo) => {
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = new User({
        name,
        email,
        password: hashedPassword,
        mobileNo
      });
      await user.save();
      return { username: user.name };
    } catch (error) {
      throw new Error('User registration failed');
    }
  };
  
  // Authenticate User Function
  const authenticateUser = async (email, password) => {
    try {
      const user = await User.findOne({ email });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ username: user.name, email: user.email }, secretKey, { expiresIn: '1h' });
        return { token };
      }
      return null;
    } catch (error) {
      throw new Error('User authentication failed');
    }
  };


  
  
  module.exports = { registerUser, authenticateUser };
