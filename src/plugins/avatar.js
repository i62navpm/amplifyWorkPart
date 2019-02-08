import Avatars from '@dicebear/avatars'
import sprites from '@dicebear/avatars-male-sprites'

const options = {}
const avatars = new Avatars(sprites(options))

export default text => avatars.create(text)
