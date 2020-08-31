const MaticPOSClient = require('@maticnetwork/maticjs').MaticPOSClient

const maticPOSClient = new MaticPOSClient({
  parentProvider: window.ethereum,
  maticProvider: 'https://rpc-mumbai.matic.today'
})

document.getElementById('submit').onclick = async() => {
  document.getElementById('status').innerText = 'Loading'

  const txHash = document.getElementById('txHash').value
  const { data } = await maticPOSClient.exitERC20(txHash, {
    from: '0x3e8cB4bd04d81498aB4b94a392c334F5328b237b',
    encodeAbi: true
  })
  console.log(data)

  document.getElementById('status').innerText = 'Done'
}
