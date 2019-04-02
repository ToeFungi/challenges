import { default as chai, should } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'
import dirtyChai from 'dirty-chai'

chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(dirtyChai);

should();
