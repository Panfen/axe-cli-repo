module.exports = [
  {
    name: 'name',
    type: 'input',
    message: 'input project name:'
  },
  {
    name: 'author',
    type: 'input',
    message: 'input project author:',
  },
  {
    name: 'description',
    type: 'input',
    message: 'input project description:',
  },
  {
    name: 'private',
    type: 'confirm',
    message: 'is this project private?',
  },
  {
    name: 'license',
    type: 'list',
    message: 'choose project license type:',
    list: ['MIT', 'BSD', 'MPL', 'GPL', 'Apache'],
    default: 'MIT'
  }
]
