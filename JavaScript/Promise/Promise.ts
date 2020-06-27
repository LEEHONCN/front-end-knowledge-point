/*
 * @Author: Li Hang
 * @Date: 2020-06-21 22:44:21
 * @LastEditTime: 2020-06-27 15:09:59
 */ 
// 补写一些测试用例
declare type Status = 'pending' | 'fulfilled' | 'rejected';
declare type Executor = (resolve: ResolveOrRejectType, reject: ResolveOrRejectType) => void;
declare type ResolveOrRejectType = (any?) => void
declare type ResolveType = (any?) => MyPromise | any;

interface MyPromise {	
	status: Status,
	value: any,
	reason: any,
	onFulfilledCallBack: ResolveType,
	onRejectedCallBack: ResolveType,
}

class MyPromise {
	
	constructor(executor: Executor){
		this.status = 'pending';
		this.value;
		this.reason;
		this.onFulfilledCallBack;
		this.onFulfilledCallBack;
		try{
			executor(this.resolve.bind(this), this.reject.bind(this))
		}catch(e){
			this.reject(e);
		}
	}

	private resolve(value?: any): void{
		if(this.status === 'pending'){
			this.status = 'fulfilled';
			this.value = value;
			this.onFulfilledCallBack && this.onFulfilledCallBack();
		}
	}

 private reject(reason?: any): void{
		if(this.status === 'pending'){
			this.status = 'rejected';
			this.reason = reason;
			this.onRejectedCallBack && this.onRejectedCallBack();
		}
	}

	private productPromise(newPromise: MyPromise, x: MyPromise | any, resolve: ResolveOrRejectType, reject: ResolveOrRejectType){
		let called = false;
		if(x !== null && (typeof x === 'function' || typeof x === 'object')){
			try{
				let then = x.then;
				if(typeof then === 'function'){
					then.call(x, (value) => {
						if(called) return;
						called = true;
						this.productPromise(newPromise, value, resolve, reject);
					}, (e) => {
						if(called) return;
						called = true;
						reject(e)		
					})
				} else {
					resolve(x)
				}
			}catch(e){
				if(called) return;
				called = true;
				reject(e)
			}
		}else{
			resolve(x);
		}
	}

	then(onFulfilled: ResolveType, onRejected: ResolveType): MyPromise{
		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
		onRejected = typeof onRejected === 'function' ? onFulfilled : (err) => { throw err };
		
		let promise2: MyPromise;

		if(this.status === 'fulfilled'){
			promise2 = new MyPromise((resolve, reject) => {
				setTimeout(() => {
					let x = onFulfilled(this.value);
					this.productPromise(promise2, x, resolve, reject)	
				})
			})
			
		}
		if(this.status === 'rejected'){
			promise2 = new MyPromise((resolve, reject) => {
				setTimeout(() => {
					let x = onRejected(this.reason);
					this.productPromise(promise2, x, resolve, reject)
				})
			})
		}

		if(this.status === 'pending'){
			promise2 = new MyPromise((resolve, reject) => {
				
				this.onFulfilledCallBack = () => {
					setTimeout(() => {
						let x = onFulfilled(this.value);
						this.productPromise(promise2, x, resolve, reject)	
					})
				};

				this.onFulfilledCallBack = () => {
					setTimeout(() => {
						let x = onRejected(this.reason);
						this.productPromise(promise2, x, resolve, reject)
					})
				};
			});
		}
		return promise2;
	}
	
	catch(){

	}
	finally(){
			
	}
}

export default MyPromise;